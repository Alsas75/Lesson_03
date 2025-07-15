import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(0, "Price cannot be negative")
    .required("Required"),
  description: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Required"),
  categoryId: Yup.number()
    .positive("Category ID must be positive")
    .integer("Category ID must be an integer")
    .required("Required"),
  imageUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

interface Credentials {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const CreateProduct = () => {
  const [message, setMessage] = useState("");

  async function fetchProduct(values: {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    imageUrl: string; 
  }) {
    
    const credentials: Credentials = {
      ...values,
      images: [values.imageUrl], 
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      setMessage("Product created successfully");
    } else {
      setMessage("Failed to create product");
    }
  }

  return (
    <div>
      <h1>Create Product</h1>
      {message && <div>{message}</div>}
      <Formik
        initialValues={{
          title: "",
          price: 0,
          description: "",
          categoryId: 1,
          imageUrl: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          console.log("Submitting values:", values);
          fetchProduct(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Title:</label>
              <Field name="title" />
              {errors.title && touched.title && <div>{errors.title}</div>}
            </div>

            <div>
              <label>Price:</label>
              <Field name="price" type="number" />
              {errors.price && touched.price && <div>{errors.price}</div>}
            </div>

            <div>
              <label>Description:</label>
              <Field name="description" as="textarea" />
              {errors.description && touched.description && (
                <div>{errors.description}</div>
              )}
            </div>

            <div>
              <label>Category ID:</label>
              <Field name="categoryId" type="number" />
              {errors.categoryId && touched.categoryId && (
                <div>{errors.categoryId}</div>
              )}
            </div>

            <div>
              <label>Image URL:</label>
              <Field 
                name="imageUrl" 
                type="url"
              />
              {errors.imageUrl && touched.imageUrl && (
                <div>{errors.imageUrl}</div>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;

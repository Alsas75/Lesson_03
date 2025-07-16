import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { Category } from "../../types";

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  price: Yup.number().positive("Mast be positive").required("Required"),
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

interface Dto {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const arr = await res.json();
    setCategories(arr);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchProduct(values: {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    imageUrl: string;
  }) {
    const dto: Dto = {
      ...values,
      images: [values.imageUrl],
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
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
            <label>Title:</label>
            <Field name="title" />
            {errors.title && touched.title && <div>{errors.title}</div>}

            <label>Price:</label>
            <Field name="price" type="number" />
            {errors.price && touched.price && <div>{errors.price}</div>}

            <label>Description:</label>
            <Field name="description" as="textarea" />
            {errors.description && touched.description && (
              <div>{errors.description}</div>
            )}

            {/* <label>Category ID:</label>
            <Field name="categoryId" type="number" />
            {errors.categoryId && touched.categoryId && (
              <div>{errors.categoryId}</div>
            )} */}

            <Field as="select" name="category">
              {/* <option value="1">Electronics</option>
              <option value="2">Clothes</option> */}
              {categories.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </Field>
            {errors.categoryId && touched.categoryId ? (
              <div>{errors.categoryId}</div>
            ) : null}

            <label>Image URL:</label>
            <Field name="imageUrl" type="url" />
            {errors.imageUrl && touched.imageUrl && (
              <div>{errors.imageUrl}</div>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;

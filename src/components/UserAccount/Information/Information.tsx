import { useState } from "react";
import styles from "./Information.module.css";

interface AddressData {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

interface ApiResponse {
  status: string;
  code: number;
  total: number;
  data: AddressData[];
}

export default function Information() {
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchAddressData() {
    setIsLoading(true);
    setError("");
    setAddressData(null);
    
    try {
      const response = await fetch("https://fakerapi.it/api/v2/addresses?_quantity=1");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      
      if (data.data && data.data.length > 0) {
        setAddressData(data.data[0]);
      } else {
        throw new Error("No address data received");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load address data"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.container}>
      <h2>Address Information</h2>
      <div className={styles.card}>
        <button 
          onClick={fetchAddressData} 
          disabled={isLoading}
          className={styles.button}
        >
          {isLoading ? "Loading..." : "Get Random Address"}
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {isLoading && <p className={styles.loading}>Loading address data...</p>}

      {addressData && !isLoading && (
        <div className={styles.card}>
          <ul className={styles.addressList}>
            <li><strong>Street:</strong> {addressData.streetName}</li>
            <li><strong>Building Number:</strong> {addressData.buildingNumber}</li>
            <li><strong>City:</strong> {addressData.city}</li>
            <li><strong>Zip Code:</strong> {addressData.zipcode}</li>
            <li><strong>Country:</strong> {addressData.country} ({addressData.country_code})</li>
          </ul>
        </div>
      )}
    </section>
  );
}
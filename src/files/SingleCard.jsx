// import React, { useState, useEffect } from "react";

// export const SingleCard = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true); // Start loading state
//         const response = await fetch("https://api.escuelajs.co/api/v1/products");
//         const products = await response.json();
//         // Limit to the first 10 products and extract their images
//         const productImages = products.slice(0, 10).map((product) => product.images[0]);
//         setImages(productImages);
//       } catch (error) {
//         console.error("Error fetching product images:", error);
//       } finally {
//         setLoading(false); // End loading state
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="carousel carousel-center rounded-box " >
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : images.length > 0 ? (
//         images.map((image, index) => (
//           <div key={index} className="carousel-item h-100">
//             <img
//               src={image || "https://dummyimage.com/420x260"}
//               alt={`Product ${index + 1}`}
//               className="rounded  h-1/2"
//             />
//           </div>
//         ))
//       ) : (
//         <div className="text-center">No images found.</div>
//       )}
//     </div>
//   );
// };

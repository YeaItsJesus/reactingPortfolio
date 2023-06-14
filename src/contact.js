import React from 'react';

const ContactInfo = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Contact Information</h2>
      <p style={styles.text}>Email: example@example.com</p>
      <p style={styles.text}>Phone: (123) 456-7890</p>
      <p style={styles.text}>Address: 123 Main Street, City, Country</p>
    </section>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '5px',
  },
};

export default ContactInfo;

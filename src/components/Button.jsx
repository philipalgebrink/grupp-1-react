function Button({ title }) {
    return (
      <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          margin: '20px',
      }}>
        <div style={{
            border: "1px solid black",
            padding: "20px",
            textAlign: "center",
            width: "382px",
            height: "80px",
            borderRadius: "8px",
        }}>
          {title}
        </div>
      </div>
    );
}

export default Button;
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
          <div style={{
            fontFamily: 'PT Mono',
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: '24.64px',
            textAlign: 'center'
            }}>
            {title}
            </div>
        </div>
      </div>
    );
}

export default Button;
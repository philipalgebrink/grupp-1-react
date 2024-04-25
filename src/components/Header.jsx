function Header({ title }) {
    return (
      <div style={{textAlign: "center", 
      padding: "20px",
      fontSize: "35px",
      fontWeight: 700,
      lineHeight: "35px",
          height: "98px",
          top: "9px",
          width: "350px"
           }}>
        {title}
      </div>
    );
  }
  
  export default Header;
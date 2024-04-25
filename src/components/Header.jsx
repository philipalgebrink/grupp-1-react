function Header({ title }) {
    return (
      <div style={{textAlign: "center", 
      padding: "20px",
      fontFamily: "Source Sans Pro",
      fontSize: "35px",
      fontWeight: 700,
      lineHeight: "35px" }}>
        {title}
      </div>
    );
  }
  
  export default Header;
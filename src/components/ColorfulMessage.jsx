export const ColorfulMessage = ({ color, children }) => {
  console.log("--ColorfulMessqage--")
    const contentStyleA = {
        color: color,
        fontSize: '18px',
    };

    return <p style={contentStyleA}>{children}</p>;
};
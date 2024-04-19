export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  };
  return (
    <>
      <h1 style={{ color: '#512222' }}>こんにちは!</h1>
      <p style={contentStyle}>ら</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

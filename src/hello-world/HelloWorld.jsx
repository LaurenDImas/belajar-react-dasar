import "./HelloWorld.css"

export default function HelloWorld() {
  const props = {
    text: 'Hello World from Spread Syntax!',
  };

  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  )
}

function HeaderHelloWorld({text = "Ups!, lupa kasi teks"}){
  return (
    <h1 className="title">{text.toUpperCase()}</h1>
  )
}

function ParagraphHelloWorld(){
  const text = "Selamat Belajar React Js dari Programmer Zaman Now";
  return (
    <p className="content">{text.toLowerCase()}</p>
  )
}
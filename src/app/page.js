import Image from "next/image";
import SearchMovies from "./searchMovies";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
    <h1 className="title">Movieverse</h1>
    <SearchMovies/>
  </div>  );
}

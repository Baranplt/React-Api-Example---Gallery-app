import SearchHeader from "./components/SearchHeader";
import ImageList from "./components/imageList";

import searchImages from "./api";
import { useState } from "react";
function App() {

  const [isEmpty, setIsEmpty] = useState(false)
  const [images, setImages] = useState([])
  const handleSubmit = async (ter) => {
    setIsEmpty(false)
    setImages([])
    const result = await searchImages(ter)
    if (result.data.results.length == 0) {
      return setIsEmpty(true)

    }
    setImages(result.data.results)
  }
  return (
    <div className="App m-2 w-full">
      <SearchHeader search={handleSubmit} />
      {
        isEmpty && <p> Aradıgınız veri bulunamadı</p>
      }
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;

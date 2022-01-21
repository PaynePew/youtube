import { useRouter } from "next/router";
import {
  Container,
  Wrapper,
  Close,
  Item,
  Input,
  PriceContainer,
  Extra,
  ExtraItems,
  ExtraItem,
  AddButton,
} from "./style";
import axios from "axios";
import { useState } from "react";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setClose(true)}>X</Close>
        <h1>Add a new Pizza</h1>
        <Item>
          <label>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Item>
        <Item>
          <label>Title</label>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} />
        </Item>
        <Item>
          <label>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </Item>
        <Item>
          <label>Prices</label>
          <PriceContainer>
            <Input
              inputSm="true"
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <Input
              inputSm="true"
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <Input
              inputSm="true"
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </PriceContainer>
        </Item>
        <Item>
          <label>Extra</label>
          <Extra>
            <Input
              inputSm="true"
              name="text"
              type="text"
              placeholder="Item"
              onChange={handleExtraInput}
            />
            <Input
              inputSm="true"
              name="price"
              type="number"
              placeholder="Price"
              onChange={handleExtraInput}
            />
            <button onClick={handleExtra}>Add</button>
          </Extra>

          <ExtraItems>
            {extraOptions.map((option) => (
              <ExtraItem key={option.text}>{option.text}</ExtraItem>
            ))}
          </ExtraItems>
        </Item>
        <AddButton onClick={handleCreate}>Create</AddButton>
      </Wrapper>
    </Container>
  );
};

export default Add;

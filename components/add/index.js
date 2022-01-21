import { useRouter } from "next/router";
import { Container, Wrapper } from "./style";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  return (
    <Container>
      <Wrapper>
        <span onClick={() => setClose(true)}>X</span>
      </Wrapper>
    </Container>
  );
};

export default Add;

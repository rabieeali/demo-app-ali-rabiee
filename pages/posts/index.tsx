import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

const PostSearchPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false);

  const getPostsByDebounce = async () => {
    try {
      if (query.length > 2) {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
        const data = response?.data;
        setResult(data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  console.log(result);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    timeout = setTimeout(async () => {
      if (!query) return setResult([]);
      await getPostsByDebounce();
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  let content;

  if (loading) {
    content = <div className="text-center mx-auto mt-5"><Spinner /></div>;
  }
  if (!loading && !result.length) {
    content = (
      <div className="text-center my-5">
        <p>No Posts Found</p>
      </div>
    );
  }
  if (!loading && result.length) {
    content = (
      <div>
        {result?.slice(0, 6).map((item: any) => (
          <div className="row shadow-sm my-2 p-2" key={item.id}>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <div className="col-6 mx-auto">
        <input className="form-control" placeholder="Search Posts For Example: sunt"  value={query} onChange={(e) => setQuery(e.target.value)} type="search" />
      </div>
      {query.length > 2 && content}
    </Layout>
  );
};

export default PostSearchPage;

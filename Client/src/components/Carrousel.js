import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

export default function Carrousel() {
  const [state, setState] = useState([]);

  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];

  useEffect(() => {
    setState(items);
  }, []);

  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </Carousel>
  );
}

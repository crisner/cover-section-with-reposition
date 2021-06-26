import React, { useState, useRef } from "react";
import Img from "./marc-markstein-hwXvNOb7XMk-unsplash.jpg";
import Draggable from "react-draggable";

const Cover = ({ height }) => {
  const [draggable, setDraggable] = useState(false);
  const [startingPosition, setstartingPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(startingPosition);
  const trackPos = (data) => {
    setPosition({ x: 0, y: data.y });
  };
  const imageRef = useRef(null);
  return (
    <>
      <Draggable
        disabled={!draggable}
        bounds={{ bottom: 0, top: -(imageRef?.current?.offsetHeight - height) }}
        defaultPosition={startingPosition}
        position={position}
        onStop={(e, data) => {
          trackPos(data);
        }}
        onDrag={(e, data) => {
          if (e?.type === "mousemove") {
            e.preventDefault();
            return;
          }
          trackPos(data);
        }}
        axis="y"
      >
        <div
          style={{
            width: "100%",
            cursor: draggable ? "move" : "initial",
          }}
        >
          <img
            ref={imageRef}
            id="handle"
            src={Img}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="cover"
          />
        </div>
      </Draggable>
      <button
        onClick={() => setDraggable(true)}
        style={{
          position: "absolute",
          top: "15rem",
          display: draggable ? "none" : "block",
        }}
      >
        Reposition
      </button>
      <div
        style={{
          position: "absolute",
          top: "15rem",
          display: draggable ? "flex" : "none",
        }}
      >
        <button
          onClick={() => {
            setDraggable(false);
            setstartingPosition(position);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setDraggable(false);
            setPosition(startingPosition);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Cover;

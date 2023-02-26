import * as React from "react";
import "./Grid.scss";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import imageData from "../../store/initImages";

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={1} c>
        {imageData.map(({ src, id }) => (
          <div key={id}>
            <img
              src={`${src}?w=162&auto=format`}
              srcSet={`${src}?w=162&auto=format&dpr=2 2x`}
              alt={id}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

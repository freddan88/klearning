/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlternativeDrop from "../../components/AlternativeDrop";
import Setup from "../../components/Setup";
import VideoCard from "../../components/VideoCard";
import SoundCard from "../../components/SoundCard";
import TextCard from "../../components/TextCard";

const StyledMediaPage = styled.div`
  /* margin-top: 65px; */

  width: 100%;
  height: 100%;
  overflow-x: none;

  /* position: relative; */
`;

const MediaPage = (props, { nextPart, header, intro, paragraph }) => {
  const [isChanged, setChanged] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState("");
  // console.log(showVideo);
  // const [selectedAlt, setSelectedAlt] = useState(false);
  useEffect(() => {
    props.location.state.mediaPreset === "video" && setSelectedAlt("video");
    props.location.state.mediaPreset === "sound" && setSelectedAlt("sound");
    props.location.state.mediaPreset === "text" && setSelectedAlt("text");
  }, []);

  return (
    <StyledMediaPage>
      <Setup changeMethod={() => setChanged(!isChanged)} />
      <AlternativeDrop
        hideDrop={isChanged}
        showVideo={() => {
          setSelectedAlt("video");
          setChanged(true);
        }}
        showSound={() => {
          setSelectedAlt("sound");
          setChanged(true);
        }}
        showText={() => {
          setSelectedAlt("text");
          setChanged(true);
        }}
      />
      {selectedAlt === "text" && (
        <TextCard
          nextPart={nextPart}
          header={header}
          intro={intro}
          paragraph={paragraph}
        />
      )}
      {selectedAlt === "video" && (
        <VideoCard nextPart={nextPart} header={header} intro={intro} />
      )}
      {selectedAlt === "sound" && (
        <SoundCard nextPart={nextPart} header={header} intro={intro} />
      )}
    </StyledMediaPage>
  );
};

export default MediaPage;

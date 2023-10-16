import { Gallery } from "react-grid-gallery";
import images from "../../assets/images/gallery/index";

const imgs = [
  {
    src: images.image01,
    width: 1280,
    height: 720,
  },
  {
    src: images.image02,
    width: 1280,
    height: 720,
  },
  {
    src: images.image03,
    width: 1280,
    height: 720,
  },
  {
    src: images.image04,
    width: 1280,
    height: 720,
  },
  {
    src: images.image05,
    width: 1280,
    height: 720,
  },
  {
    src: images.image06,
    width: 1280,
    height: 720,
  },
  {
    src: images.image07,
    width: 1280,
    height: 720,
  },
  {
    src: images.image08,
    width: 1280,
    height: 720,
  },
  {
    src: images.image08,
    width: 1280,
    height: 720,
  },
  {
    src: images.image09,
    width: 1280,
    height: 720,
  },
  {
    src: images.image10,
    width: 1280,
    height: 720,
  },
  {
    src: images.image11,
    width: 1280,
    height: 720,
  },
  {
    src: images.image12,
    width: 1280,
    height: 720,
  },
  {
    src: images.image13,
    width: 1280,
    height: 720,
  },
  {
    src: images.image14,
    width: 1280,
    height: 720,
  },
  {
    src: images.image05,
    width: 1280,
    height: 720,
  },
  {
    src: images.image06,
    width: 1280,
    height: 720,
  },
];

export default function GalleryGrid() {
  return <Gallery images={imgs} />;
}

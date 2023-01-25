import { h } from 'preact';

interface Props {
  text: string;
  image: string;
  title: string;
}

const MyComponent: preact.FunctionalComponent<Props> = ({ text, image, title }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-1/5 sm:w-1/10" />
      <div className="w-3/5 sm:w-4/5 text-center">
        <h1 className="text-2xl font-medium">{title}</h1>
        <div className="flex">
            <p className="text-base sm:w-3/4">{text}</p>
            <img src={image} className="w-full sm:w-1/4 sm:my-4 sm:ml-4 sm:float-right" />
        </div>
      </div>
      <div className="w-1/5 sm:w-1/10" />
    </div>
  );
};
export default MyComponent

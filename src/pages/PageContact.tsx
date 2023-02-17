import { IPageProps } from "../interfaces";
import "../styles/pages/pageContact.scss";

export const PageContact: React.FC<IPageProps> = ({ ref }) => {
  return (
    <div ref={ref} id="contact" className="pageContact">
      <p>welcome to the Contact page</p>
    </div>
  );
};

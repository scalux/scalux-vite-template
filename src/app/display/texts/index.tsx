import { LabelsComponentProps } from "scalux/helpers";

const Title = ({ text }: LabelsComponentProps) => <h1>{text}</h1>;

const Label = ({ text }: LabelsComponentProps) => <>{text}</>;

const RawText = ({ text }: LabelsComponentProps) => text;

const Paragraph = ({ text }: LabelsComponentProps) => <p>{text}</p>;

export { Label, Title, Paragraph, RawText };

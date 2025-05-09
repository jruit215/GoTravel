import { ReactElement } from "react";

// Defines a contract that the individual who uses the Page component must subscribe to
// In this case, there is a children property for props, which must be a React element
interface PageProps {
    children: ReactElement[];
}

export default function Page(props: PageProps) {
  return <div>{props.children}</div>;
}
import Form from "../components/Form";
export default function Contact() {
  return (
    <div className="">
      <div className="mt-6 p-4  space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-center">
          Contact
        </h1>
        <p className="text-center text-lg">We are here to help</p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

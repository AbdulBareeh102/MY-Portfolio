import SectionTitle from "./SectionTitle";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8ac50784-444d-4d6f-a84b-92fa687c8a40"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contacts
          </p>
          <p className="text-gray-300 py-4">
            //Submit the form below or shoot me an email = my email@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          row="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Please, lets collaborate{" "}
        </button>
      </form>
    </div>
  );
};

export default Contacts;

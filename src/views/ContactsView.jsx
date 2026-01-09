import ContactModule from "../ui/ContactModule";
import EmployeesContacts from "../ui/EmployeesContacts";

export default function ContactsView() {
  return (
    <>
      <div className="max-w-[1502] w-[90%] mx-auto">
        <h1 className="text-4xl  font-bold text-gray-800 relative inline-block">
          Контакты
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-red-500 rounded"></span>
        </h1>
      </div>
    </>
  );
}

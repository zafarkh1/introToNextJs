import CreateForm from "@/app/tickets/create/CreateForm";


function CreateTicket(props) {
  return (
    <main>
      <h2 className='text-primary text-center'>Add a new ticket</h2>
      <CreateForm/>
    </main>
  );
}

export default CreateTicket;
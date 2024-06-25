import React, {Suspense} from 'react';
import TicketList from "@/app/tickets/TicketList";
import Loading from "@/app/loading";

function Page(props) {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
    </main>
  );
}

export default Page;
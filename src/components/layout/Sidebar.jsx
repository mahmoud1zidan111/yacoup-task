export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 w-[22%] h-screen bg-[#0B1120] text-white ">
      {/* start Top sction in side bar  */}
      <div className="top-sction pt-8 flex items-center justify-center pb-10 border-b border-r border-[#1A1F2B] border-solid">
        <h2 className="logo">Fit Force</h2>
      </div>
      {/* end Top sction in side bar  */}

      {/* start Middel sction in side bar  */}

      <div className="middl-sction p-10 px-10 overflow-y-auto scrollbar-thumb-slate-900/100 scrollbar-track-slate-900/50 h-[calc(80vh-150px)]">
        <ul>
          <li className="mb-4">
            <a href="">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="">Clients</a>
          </li>
          <li className="mb-4">
            <a href="">Messengr</a>
          </li>
          <li className="mb-4">
            <a href="">Flnance</a>
          </li>
          <li className="mb-4">
            <a href="">Plans Queue</a>
          </li>
          <li className="mb-4">
            <a href="">Forms</a>
          </li>
          <li className="mb-4">
            <a href="">Nutrition</a>
          </li>
          <li className="mb-4">
            <a href="">Team</a>
          </li>
          <li className="mb-4">
            <a href="">Training</a>
          </li>
          <li className="mb-4">
            <a href="">Settings</a>
          </li>
        </ul>
      </div>
      {/* end Middel sction in side bar  */}

      <div className="bottom-sction p-10 px-10 border-t border-[#1A1F2B]">
        <h3>ay haga </h3>
        <p>ant kda kda mehs mohem andk ghar al logeic</p>
      </div>
    </div>
  );
}

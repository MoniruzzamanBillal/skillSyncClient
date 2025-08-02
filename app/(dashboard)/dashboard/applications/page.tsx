import { NavigateButton } from "@/components/shared";
import { ApplicationColumn } from "@/DataTables/Application/ApplicationColumn";
import ApplicationTable from "@/DataTables/Application/ApplicationTable";
import { applicationData } from "@/utils/demo.data";

const Application = () => {
  return (
    <div className="applicationContainer">
      <div className="applicationsWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h3 className="brand text-2xl font-medium mb-4 ">
          Manage Applications
        </h3>

        <NavigateButton
          label="Add Application"
          route="/dashboard/applications/addApplication"
        />

        {/* table section  */}
        <div className="Tablecontainer mx-auto py-10">
          <ApplicationTable
            columns={ApplicationColumn}
            data={applicationData}
          />
        </div>
      </div>
    </div>
  );
};

export default Application;

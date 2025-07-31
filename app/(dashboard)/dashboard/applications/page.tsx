import { Button } from "@/components/ui/button";
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

        <Button
          // onClick={() => navigate("/dashboard/admin/add-course")}
          className="mb-4 bg-prime100 hover:bg-prime200 cursor-pointer"
        >
          Add Application
        </Button>

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

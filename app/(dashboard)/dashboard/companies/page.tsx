import { Button } from "@/components/ui/button";
import { CompanyColumn } from "@/DataTables/Company/CompanyColumn";
import CompanyTable from "@/DataTables/Company/CompanyTable";
import { companyData } from "@/utils/demo.data";

const Companies = () => {
  return (
    <div className="companiesContainer">
      <div className="companiesWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h3 className="brand text-2xl font-medium mb-4 "> Manage Companies </h3>

        <Button
          // onClick={() => navigate("/dashboard/admin/add-course")}
          className="mb-4 bg-prime100 hover:bg-prime200 cursor-pointer"
        >
          Add Company
        </Button>

        {/* table section  */}
        <div className="Tablecontainer mx-auto py-10">
          <CompanyTable columns={CompanyColumn} data={companyData} />
        </div>
      </div>
    </div>
  );
};

export default Companies;

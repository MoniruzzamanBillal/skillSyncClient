type TProps = {
  params: {
    applicationId: string;
  };
};

const ApplicationDetail = async ({ params }: TProps) => {
  console.log("application id = ");

  const { applicationId } = await params;

  console.log(applicationId);

  return (
    <div className="mainContainer">
      <div className="applicationDetailWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h1>application detail </h1>
        <h1>application detail </h1>
        <h1>application detail </h1>
        <h1>application detail </h1>
      </div>
    </div>
  );
};

export default ApplicationDetail;

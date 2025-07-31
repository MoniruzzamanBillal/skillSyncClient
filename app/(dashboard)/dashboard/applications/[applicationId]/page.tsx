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
      <h1>application detail page </h1>
      <h1>application detail page </h1>
      <h1>application detail page </h1>
      <h1>application detail page </h1>
      <h1>application detail page </h1>
    </div>
  );
};

export default ApplicationDetail;

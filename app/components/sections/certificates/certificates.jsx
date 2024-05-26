import certificates_data from "@/data/certificates_data";
import CertificateItem from "./certificateItem";

const Certificates = () => {
  return (
    <ol className="group/list">
      {certificates_data.map((el) => (
        <CertificateItem
          key={el.id}
          name={el.name}
          issuingOrganization={el.issuingOrganization}
          certificateLink={el.certificateLink}
          issueDate={el.issueDate}
          skills={el.skills}
          organizationIcon={el.organizationIcon}
        />
      ))}
    </ol>
  );
};

export default Certificates;

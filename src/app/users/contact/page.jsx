/** @format */

async function getProjects() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const projects = await res.json();

  return projects;
}
const Page = async () => {
  const projects = await getProjects();
  return projects.map((project, index) => (
    <div key={index}>{project?.title}</div>
  ));
};

export default Page;

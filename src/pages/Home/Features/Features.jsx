import teacherImg from "../../../assets/teacher.png";
import studentImg from "../../../assets/student.png";
import developerImg from "../../../assets/developer.png";

const Features = () => {
  const features = [
    {
      id: 1,
      img: teacherImg,
      title: "Are you a Teacher?",
      text: "You can Schedule your class activities",
    },

    {
      id: 2,
      img: studentImg,
      title: "Are you a Student?",
      text: "You can manage your assignments",
    },

    {
      id: 3,
      img: developerImg,
      title: "Are you a Student?",
      text: "You can manage your project deadline",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl h-max px-2 lg:px-8 bg-gray-800 py-12 mb-20 rounded-2xl shadow-xl">
      <h1 className="text-4xl text-primary text-center my-3">What can You Do</h1>
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id}>
            <div className="mx-auto flex mt-5 h-20 w-20 items-center justify-center rounded-full">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-20 w-20"
              />
            </div>
            <h3 className="mt-8 text-lg text-blue-300 font-semibold ">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm font-medium text-gray-400">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-center text-4xl mt-6 text-purple-700">And Many More....</h3>
    </div>
  );
};

export default Features;

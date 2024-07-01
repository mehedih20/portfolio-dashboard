import SmallSpinner from "@/components/Spinner/SmallSpinner";
import { useDeleteSkillMutation } from "@/redux/features/skills/skillsApi";
import { toast } from "sonner";

type SingleSkillType = {
  item: any;
  index: number;
};

const SingleSkill = ({ item, index }: SingleSkillType) => {
  const [deleteSkill, { isLoading: deleteLoading }] = useDeleteSkillMutation();

  const handleDelete = async () => {
    try {
      const result = await deleteSkill(item.id).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      key={item.id}
      className="grid sm:grid-cols-3 gap-3 bg-gray-200/50 py-2 px-4 rounded-md mb-3 font-medium text-gray-700"
    >
      <p>
        <span className="text-cyan-700">{index + 1}.</span> {item.name}
      </p>
      <div className="sm:text-center">
        <p className="text-cyan-700">{item.proficiency}</p>
      </div>
      <div className="flex sm:justify-end">
        <button
          onClick={handleDelete}
          className="flex justify-center items-center text-sm font-semibold text-gray-100 bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out py-2 w-[120px] rounded-md"
        >
          {deleteLoading && <SmallSpinner />}
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleSkill;

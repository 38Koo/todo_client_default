import { useParams, useNavigate } from "react-router";

function ItemDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirm(`ID: ${id} のアイテムを削除しますか？`)) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/items/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          throw new Error(`Failed to delete item with ID: ${id}`);
        }

        alert("削除しました");
        navigate("/");
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("削除に失敗しました");
      }
    }
  };

  return (
    <div>
      <h3>アイテム削除</h3>
      <p style={{ color: "#dc3545", fontWeight: "bold" }}>
        ID: {id} のアイテムを削除しようとしています。
      </p>
      <p>この操作は取り消せません。本当に削除しますか？</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={handleDelete}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          削除する
        </button>
        <button
          onClick={() => navigate(`/item/${id}`)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}

export default ItemDelete;

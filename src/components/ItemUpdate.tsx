import { useState } from "react";
import { useParams, useNavigate } from "react-router";

function ItemUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCompleted, setIsCompleted] = useState("未完了");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/items/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, isCompleted }),
      });
      navigate(`/item/${id}`);
    } catch (error) {
      console.error({ message: error });
      alert("アイテムの更新に失敗しました");
    }
  };

  return (
    <div>
      <h3>アイテム更新</h3>
      <p>ID: {id} のアイテム情報を更新します。</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            アイテム名
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            コンテンツ
          </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            ステータス
          </label>
          <select
            value={isCompleted}
            onChange={(e) => setIsCompleted(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="完了">完了</option>
            <option value="未完了">未完了</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            更新する
          </button>
          <button
            type="button"
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
      </form>
    </div>
  );
}

export default ItemUpdate;

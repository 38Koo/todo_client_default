import { useState } from "react";
import { useParams, useNavigate } from "react-router";

function ItemUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("サンプルアイテム");
  const [status, setStatus] = useState("有効");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ID: ${id} のアイテムを更新しました`);
    navigate(`/item/${id}`);
  };

  return (
    <div>
      <h3>アイテム更新</h3>
      <p>ID: {id} のアイテム情報を更新します。</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            アイテム名
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            ステータス
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="有効">有効</option>
            <option value="無効">無効</option>
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

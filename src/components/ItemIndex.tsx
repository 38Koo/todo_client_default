import { useParams } from "react-router";

function ItemIndex() {
  const { id } = useParams();

  return (
    <div>
      <h3>Item詳細ページ</h3>
      <p>ID: {id} のアイテムの詳細情報を表示します。</p>
      <div style={{ marginTop: "20px" }}>
        <h4>アイテム情報</h4>
        <ul>
          <li>アイテムID: {id}</li>
          <li>名前: サンプルアイテム</li>
          <li>ステータス: 有効</li>
          <li>作成日: 2026-02-01</li>
        </ul>
      </div>
    </div>
  );
}

export default ItemIndex;

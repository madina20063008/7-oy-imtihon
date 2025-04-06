import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const token = "64bebc1e2c6d3f056a8c85b7";

function FlowerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flower, setFlower] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlower = async () => {
      try {
        const localFlowers = JSON.parse(localStorage.getItem('flowers')) || [];
        let found = localFlowers.find(f => f._id === id);

        if (!found && !isNaN(id)) {
          found = localFlowers[parseInt(id)];
        }

        if (found) {
          setFlower(found);
        } else {
          const res = await fetch(`https://green-shop-backend.onrender.com/api/flower/category/small-plants?access_token=${token}`);
          const json = await res.json();
          const apiFlower = json.data.find(f => f._id === id);
          if (apiFlower) setFlower(apiFlower);
        }
      } catch (error) {
        console.error('Error fetching flower details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFlower();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!flower) return <div className="p-8">Flower not found</div>;

  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/teachers')}
        className="mb-6 text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Teachers
      </button>

      <h1 className="text-2xl font-bold mb-4">{flower.title}</h1>
      <img src={flower.main_image || '/fallback.jpg'} alt={flower.title} className="w-64 h-64 object-cover mb-4" />
      <p><strong>Category:</strong> {flower.category}</p>
      <p><strong>Price:</strong> ${flower.price}</p>
      <p><strong>Discount Price:</strong> {flower.discount_price || 'is not in discount'}</p>
      <p><strong>Description:</strong> {flower.description || 'No description available.'}</p>
    </div>
  );
}

export default FlowerDetail;

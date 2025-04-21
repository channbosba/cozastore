// import { ReactElement } from 'react';
// import { Box } from '@mui/material';

// import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
// import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
// import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
// import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
// import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';
// import Customers from 'components/sections/dashboard/customers/Customers';
// import Earnings from 'components/sections/dashboard/earnings/Earnings';
// import Level from 'components/sections/dashboard/level/Level';

// const Product = (): ReactElement => {
//   return (
//     <>
//       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
//         {/* <Box gridColumn={{ xs: 'span 12', '2xl': 'span 8' }} order={{ xs: 0 }}>
//           <TodaysSales />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 4' }} order={{ xs: 1, '2xl': 1 }}>
//           <Level />
//         </Box> */}
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
//           <TopProducts />
//         </Box>
//         {/* <Box
//           gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
//           order={{ xs: 3, xl: 3, '2xl': 3 }}
//         >
//           <CustomerFulfillment />
//         </Box>
//         <Box
//           gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
//           order={{ xs: 4, xl: 5, '2xl': 4 }}
//         >
//           <Earnings />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', xl: 'span 8' }} order={{ xs: 5, xl: 4, '2xl': 5 }}>
//           <VisitorInsights />
//         </Box>
//         <Box
//           gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
//           order={{ xs: 6, '2xl': 6 }}
//         >
//           <TrendingNow />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', '2xl': 'span 6' }} order={{ xs: 7 }}>
//           <Customers />
//         </Box> */}
//       </Box>
//     </>
//   );
// };









import { ReactElement, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface ProductItem {
  id: string;
  name: string;
  sales: number;
}

const initialProducts: ProductItem[] = [
  { id: '01', name: 'Home Decore Range', sales: 78 },
  { id: '02', name: 'Disney Princess Dress', sales: 62 },
  { id: '03', name: 'Bathroom Essentials', sales: 51 },
  { id: '04', name: 'Apple Smartwatch', sales: 29 },
];

const Product = (): ReactElement => {
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', sales: 0 });

  const handleOpen = (index: number | null = null) => {
    if (index !== null) {
      const item = products[index];
      setFormData({ name: item.name, sales: item.sales });
    } else {
      setFormData({ name: '', sales: 0 });
    }
    setEditIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditIndex(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = [...products];
    if (editIndex !== null) {
      updated[editIndex] = { ...updated[editIndex], ...formData };
    } else {
      updated.push({
        id: String(Date.now()),
        name: formData.name,
        sales: Number(formData.sales),
      });
    }
    setProducts(updated);
    handleClose();
  };

  const handleDelete = (index: number) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Product List</Typography>

      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Product
      </Button>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleOpen(index)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(index)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex !== null ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Sales"
            name="sales"
            type="number"
            fullWidth
            margin="normal"
            value={formData.sales}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Product;

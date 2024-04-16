import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions  from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CartItemsComponent from "./CartItemsComponent";
import { addToCart } from "./CartSlicer";
import { useDispatch } from "react-redux";


export default function ProductsComponent()
{
    const params = useParams();
    const [products, setProducts] = useState<any[]>([]);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (product:any) => {
        dispatch(addToCart(product));
    }
    

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
   
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8080/products/categories/${params.category}`)
        .then(res=>{
            setProducts(res.data);
        })
       
    },[params.category])

   
    
    return(
        <div>
            <h2> {params.category} Products </h2>
            <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                {
                    products.map(product=>
                        <Card key={product.id} style={{width:'200px', padding:'10px'}} className="m-2 p2">
                            <p className="text-center bg-dark p-2 text-light"> $ {product.price}</p>
                            <CardMedia 
                              component="img"
                              height="300"
                              width="100%"
                              image={product.image}
                              alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div"  style={{height:'200px'}}>
                                    {product.title}
                                </Typography>
                                <Button onClick={handleClickOpen} >Description</Button>
                                <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                 >
                                    <DialogTitle id="alert-dialog-title">
                                    {product.title}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        {product.description}
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button autoFocus onClick={handleClose} >
                                        OK
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=> handleAddToCart(product)}  className="w-100" variant="contained" > <span className="bi bi-cart4"></span>  Add to Cart</Button>
                            </CardActions>
                        </Card>
                        )
                }
            </div>
        </div>
    )
}
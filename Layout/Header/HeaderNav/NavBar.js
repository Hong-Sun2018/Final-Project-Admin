import { Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'right',
    },
    links: {
      marginRight: '10px',
    }
  }
);

const navLinks = [
  {
    title: 'Products',
    link: '/products'
  },
  {
    title: 'Orders',
    link:'/orders'
  },
  {
    title: 'Users',
    link:'/users'
  },
];

const NavBar = () => {

  const classes = useStyles();

  return (

    <Box className={classes.root}>
      {navLinks.map((item, index) => {
        return(
          <Box key={index} className={classes.links}>
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default NavBar;
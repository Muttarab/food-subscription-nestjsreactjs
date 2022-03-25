import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/100% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        marginBottom:20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.image}>
                <Typography>FOOD</Typography>
                <Typography>Mass produced food doesn't exist here.</Typography>
            </Box>
        </>
    )
}
export default Banner;
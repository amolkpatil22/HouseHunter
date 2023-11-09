import { Grid, Spinner } from "@chakra-ui/react"


export const SpinnerLoader = () => {
    return (
        <Grid justifyContent={"center"} height={"400px"} alignItems={"center"}> <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        /></Grid>
    )
}
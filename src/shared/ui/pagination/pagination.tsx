interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page:number) => void;
}


export const Pagination = ({totalPages, currentPage, onPageChange}:IPaginationProps) => {
    if(totalPages <= 0) return null;
    const totalPagesButtons:number[] = Array.from({length:totalPages}, (_, index) => index + 1)

    

    return (
        <>
        {totalPagesButtons.map((page) => (
          <button style={page === currentPage ? {color:'red'}:{margin:"10px 5px", width:20} }  onClick={() => onPageChange(page)} key={page}>{page}</button>
        ))}
        </>
    )

}
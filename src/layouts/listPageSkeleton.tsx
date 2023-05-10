const ListPageSkeleton = () => (
  <>
    <div className="flex w-[100%] animate-pulse flex-row flex-wrap justify-between gap-[1%]">
      <div className="min-md:[49%] min-h-[200px] w-[100%] bg-gray-300 md:w-[50%]" />
      <div className="mt-2 flex w-[100%] flex-row md:mt-0 md:w-[49%] md:flex-col md:gap-2">
        <div className="flex w-[50%] flex-col space-y-2 md:w-[100%]">
          <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
        </div>

        <div className="flex w-[50%] flex-col space-y-2 md:w-[100%]">
          <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
        </div>
      </div>
    </div>
    <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
      <div className="min-h-[60px] w-[50%]  bg-gray-300" />
      <div className="w-[50%]">
        <div className="flex flex-col space-y-2">
          <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
        </div>
      </div>
    </div>{' '}
    <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
      <div className="min-h-[60px] w-[50%]  bg-gray-300" />
      <div className="w-[50%]">
        <div className="flex flex-col space-y-2">
          <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
          <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
        </div>
      </div>
    </div>
  </>
);

export default ListPageSkeleton;

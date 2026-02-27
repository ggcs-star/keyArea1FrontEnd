const BreadcrumbShimmer = () => {
  return (
    <nav className="py-2 text-sm text-gray-500 mb-4 animate-pulse">
      <ol className="flex items-center gap-2">

        {/* Home */}
        <li className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
          <span>/</span>
        </li>

        {/* Budgetwise */}
        <li className="flex items-center gap-2">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <span>/</span>
        </li>

        {/* Project Name */}
        <li>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </li>

      </ol>
    </nav>
  );
};

export default BreadcrumbShimmer;
